interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-8xl px-6 pt-5 lg:px-8">
      <img className="h-8 w-auto" src="/images/logo2.svg" alt="" />
      <div className="justify-center h-[90vh] w-full items-center flex  ">
        {children}
      </div>
    </div>
  );
};
