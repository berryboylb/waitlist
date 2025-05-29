import { Resend, CreateEmailOptions } from "resend";
import { env } from "@/env.mjs";
import path from "path";
import fs from "fs/promises";
import Handlebars from "handlebars";
/* eslint-disable  @typescript-eslint/no-explicit-any */

type MailOptions = {
  to: string;
  subject: string;
  template: string;
  context?: Record<string, any>;
} & Omit<CreateEmailOptions, "html" | "text">;

export class Mailer {
  private resend = new Resend(env.RESEND_KEY);
  private templatesDir = path.resolve(process.cwd(), "../waitlist/templates");

  /**
   * Compiles a Handlebars template with provided context
   * @param file - Template file name (without extension)
   * @param context - Data to pass to the template
   * @returns Compiled HTML string
   */
  async compileTemplate(
    file: string,
    context: Record<string, any> = {}
  ): Promise<string> {
    const templatePath = path.join(this.templatesDir, `${file}.hbs`);

    try {
      const templateSource = await fs.readFile(templatePath, "utf8");
      const template = Handlebars.compile(templateSource);
      return template(context);
    } catch (error) {
      throw new Error(`Failed to compile template '${file}': ${error}`);
    }
  }

  /**
   * Sends an email using a template
   * @param options - Mail options including template name and context
   * @returns Response from Resend API
   */
  async sendEmail(options: MailOptions) {
    const { to, subject, template, context, from, ...restOptions } = options;

    // Compile the template
    const html = await this.compileTemplate(template, context);
    console.log(html);

    // Send the email
    return this.resend.emails.send({
      ...restOptions,
      from, // You can set a default
      to,
      subject,
      html,
    });
  }
}
