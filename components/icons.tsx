import {
    ArrowDownUp,
    ArrowLeft,
    ArrowUpRight,
    AlertTriangle,
    ArrowRight,
    Bell,
    Calendar,
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    Command,
    CloudUpload,
    ClipboardCheck,
    CircleArrowLeft,
    Clock,
    CreditCard,
    CirclePlus,
    Dot,
    File,
    FileText,
    Filter,
    Frown,
    HelpCircle,
    Globe,
    Image,
    Laptop,
    Loader2,
    LucideProps,
    ListFilter,
    LayoutGrid,
    LayoutPanelLeft,
    Mail,
    Moon,
    MapPin,
    MessageSquareMore,
    MessageSquareDot,
    MessageCircle,
    MoreVertical,
    MoveUpRight,
    Pizza,
    Phone,
    Plus,
    Minus,
    Send,
    Settings,
    SunMedium,
    Trash,
    Timer,
    User,
    X,
    Menu,
    Leaf,
    Lock,
    LockOpen,
    Sparkles,
    Search,
    Eye,
    EyeOff,
    EllipsisVertical,
    Ellipsis,
    MoveRight,
    LogOut,
    Slash,
    BellDot,
    ShoppingCart,
    WalletMinimal,
    Watch,
    SquareActivity,
    UserMinus,
    Check,
    SquareDashedBottomCode,
    type Icon as LucideIcon,
  } from "lucide-react";
  
  export type Icon = typeof LucideIcon;
  
  export const Icons = {
    check: Check,
    arrowUpRight: ArrowUpRight,
    squareActivity: SquareActivity,
    clipboardCheck: ClipboardCheck,
    messageSquareMore: MessageSquareMore,
    shoppingCart: ShoppingCart,
    circleArrowLeft: CircleArrowLeft,
    bellDot: BellDot,
    phone: Phone,
    ellipsisV: Ellipsis,
    ellipsisVertical: EllipsisVertical,
    slash: Slash,
    sort: ArrowDownUp,
    arrowLeft: ArrowLeft,
    filter: ListFilter,
    filterFunnel: Filter,
    frown: Frown,
    search: Search,
    circlePlus: CirclePlus,
    dot: Dot,
    globe: Globe,
    mapPin: MapPin,
    calendar: Calendar,
    calendarDays: CalendarDays,
    clock: Clock,
    cloudUpload: CloudUpload,
    timer: Timer,
    logout: LogOut,
    moveRight: MoveRight,
    eye: Eye,
    eyeOff: EyeOff,
    sparkles: Sparkles,
    layoutGrid: LayoutGrid,
    bell: Bell,
    lock: Lock,
    lockOpen: LockOpen,
    layoutPanelLeft: LayoutPanelLeft,
    leaf: Leaf,
    logo: Command,
    close: X,
    minus: Minus,
    spinner: Loader2,
    chevronLeft: ChevronLeft,
    chevronRight: ChevronRight,
    chevronDown: ChevronDown,
    trash: Trash,
    post: FileText,
    page: File,
    media: Image,
    settings: Settings,
    billing: CreditCard,
    ellipsis: MoreVertical,
    add: Plus,
    warning: AlertTriangle,
    user: User,
    arrowRight: ArrowRight,
    help: HelpCircle,
    pizza: Pizza,
    sun: SunMedium,
    moon: Moon,
    laptop: Laptop,
    menu: Menu,
    walletMinimal: WalletMinimal,
    watch: Watch,
    messageSquareDot: MessageSquareDot,
    messageCircle: MessageCircle,
    moveUpRight: MoveUpRight,
    mail: Mail,
    send: Send,
    userMinus: UserMinus,
    squareDashedBottomCode: SquareDashedBottomCode,
    profile: ({ ...props }: LucideProps) => (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="profile"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        {...props}
      >
        <path
          d="M10.1334 9.05835C10.05 9.05002 9.95005 9.05002 9.85838 9.05835C7.87505 8.99169 6.30005 7.36669 6.30005 5.36669C6.30005 3.32502 7.95005 1.66669 10 1.66669C12.0417 1.66669 13.7 3.32502 13.7 5.36669C13.6917 7.36669 12.1167 8.99169 10.1334 9.05835Z"
          fill="#fff"
          stroke="#1F7A7A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.96672 12.1333C3.95006 13.4833 3.95006 15.6833 5.96672 17.025C8.25839 18.5583 12.0167 18.5583 14.3084 17.025C16.3251 15.675 16.3251 13.475 14.3084 12.1333C12.0251 10.6083 8.26672 10.6083 5.96672 12.1333Z"
          stroke="#1F7A7A"
          fill="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  
    home: ({ ...props }: LucideProps) => (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="home"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        {...props}
      >
        <path
          d="M10 15V12.5"
          stroke="#1E2028"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.39172 2.34955L2.61672 6.97455C1.96672 7.49122 1.55006 8.58288 1.69172 9.39955L2.80006 16.0329C3.00006 17.2162 4.13339 18.1745 5.33339 18.1745H14.6667C15.8584 18.1745 17.0001 17.2079 17.2001 16.0329L18.3084 9.39955C18.4417 8.58288 18.0251 7.49122 17.3834 6.97455L11.6084 2.35788C10.7167 1.64122 9.27506 1.64122 8.39172 2.34955Z"
          stroke="#292D32"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  
    line: ({ ...props }: LucideProps) => (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="home"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        {...props}
      >
        <path
          d="M2.5 14.1663H11.6667M11.6667 14.1663C11.6667 15.5471 12.786 16.6663 14.1667 16.6663C15.5474 16.6663 16.6667 15.5471 16.6667 14.1663C16.6667 12.7856 15.5474 11.6663 14.1667 11.6663C12.786 11.6663 11.6667 12.7856 11.6667 14.1663ZM7.5 5.83301H16.6667M7.5 5.83301C7.5 7.21372 6.38071 8.33301 5 8.33301C3.61929 8.33301 2.5 7.21372 2.5 5.83301C2.5 4.4523 3.61929 3.33301 5 3.33301C6.38071 3.33301 7.5 4.4523 7.5 5.83301Z"
          stroke="#1E2028"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  
    logOut: ({ ...props }: LucideProps) => (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="logOut"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        {...props}
      >
        <path
          d="M14.5334 12.1837L16.6668 10.0503L14.5334 7.91699"
          stroke="#D92D20"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M8.1333 10.0498H16.6083"
          stroke="#D92D20"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M9.79997 16.6663C6.11663 16.6663 3.1333 14.1663 3.1333 9.99967C3.1333 5.83301 6.11663 3.33301 9.79997 3.33301"
          stroke="#D92D20"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  
    userAdd: ({ ...props }: LucideProps) => (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="logOut"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
        {...props}
      >
        <path
          d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z"
          stroke="#1C6E6E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M2.5575 16.5C2.5575 13.5975 5.44499 11.25 8.99999 11.25C9.71999 11.25 10.4175 11.3475 11.07 11.5275"
          stroke="#1C6E6E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M16.5 13.5C16.5 13.74 16.47 13.9725 16.41 14.1975C16.3425 14.4975 16.2225 14.79 16.065 15.045C15.5475 15.915 14.595 16.5 13.5 16.5C12.7275 16.5 12.03 16.2075 11.505 15.7275C11.28 15.5325 11.085 15.3 10.935 15.045C10.6575 14.595 10.5 14.0625 10.5 13.5C10.5 12.69 10.8225 11.9475 11.3475 11.4075C11.895 10.845 12.66 10.5 13.5 10.5C14.385 10.5 15.1875 10.8825 15.7275 11.4975C16.2075 12.03 16.5 12.735 16.5 13.5Z"
          stroke="#1C6E6E"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M14.6176 13.4863H12.3826"
          stroke="#1C6E6E"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M13.5 12.3906V14.6331"
          stroke="#1C6E6E"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  
    board: ({ ...props }: LucideProps) => (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        data-icon="board"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 20 20"
        {...props}
      >
        <path
          d="M6.66675 10.167H12.5001"
          stroke="#1E2028"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M6.66675 13.5H10.3167"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M8.33341 5.00033H11.6667C13.3334 5.00033 13.3334 4.16699 13.3334 3.33366C13.3334 1.66699 12.5001 1.66699 11.6667 1.66699H8.33341C7.50008 1.66699 6.66675 1.66699 6.66675 3.33366C6.66675 5.00033 7.50008 5.00033 8.33341 5.00033Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M13.3333 3.34961C16.1083 3.49961 17.5 4.52461 17.5 8.33294V13.3329C17.5 16.6663 16.6667 18.3329 12.5 18.3329H7.5C3.33333 18.3329 2.5 16.6663 2.5 13.3329V8.33294C2.5 4.53294 3.89167 3.49961 6.66667 3.34961"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  };
  