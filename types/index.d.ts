import { Icons } from "@/components/icons";
import { QueryFunction, QueryKey } from "@tanstack/react-query";
import { AxiosRequestHeaders, AxiosResponse, Method } from "axios";

export interface SecureRequestProps<T = Record<string, unknown>> {
    method?: Method;
    url: string;
    body?: Record<string, unknown> | FormData;
    isApi?: boolean;
    baseURL?: string;
    headers?: AxiosRequestHeaders;
    endpoint?: string;
    queryKey?: string | string[] | number[];
    showSuccessToast?: boolean;
    showFailureToast?: boolean;
    token?: string;
    queryFn?: QueryFunction<ResponseType<T>, QueryKey>;
  }
  
  export interface RequestResponse<T = Record<string, unknown>> {
    queryFn?: QueryFunction<ResponseType<T>, QueryKey>;
  }
  
  export type ResponseType<D = Record<string, unknown>> = AxiosResponse<
    CredentialsServerResponseModel<D>
  >;
  
  export type CredentialsServerResponseModel<T> = {
    data: T;
    referenceId: string;
    message: string;
    status: boolean;
  };
  
  export interface ResponseErrorType {
    message: string;
    name: string;
    errors?: Record<string, unknown>;
  
    response: {
      data: {
        response_message: string;
        status: number;
        statusCode: number;
        message: string;
        details: string[];
        errors?: Record<string, unknown>;
        source: string;
      };
    };
  }
  
  export type CustomMethod = "get" | "put" | "delete" | "post" | "patch";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  keywords: Array<string>;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export interface IUser {
  firstName: string;
  lastName: string;
  role: string;
  emailVerified: boolean;
}

export interface IFileUpload {
  message: string;
  data: {
    data: {
      uploadedFileUrl: string;
    };
  };
}

interface Media {
  icon: string;
  percentage: number;
  completed: number;
  photo: string;
  uploading: boolean;
  name: string;
  pending: boolean;
}

export type DashboardConfig = {
  landingNav: MainNavItem[];
  mainNav: MainNavItem[];
  sidebarMain: Array<
    SidebarNavItem & { showName?: boolean; content?: string; back?: boolean }
  >;
};
