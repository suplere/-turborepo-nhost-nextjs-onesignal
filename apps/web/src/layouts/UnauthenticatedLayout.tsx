import { useAuthenticationStatus } from "@nhost/nextjs";
import { Loader } from "components/Loader";
import { useRouter } from "next/router";
import { DetailedHTMLProps, HTMLProps, useEffect } from "react";

export interface UnauthenticatedLayoutProps
  extends DetailedHTMLProps<HTMLProps<HTMLDivElement>, HTMLDivElement> {}

export default function UnauthenticatedLayout({
  children,
  ...props
}: UnauthenticatedLayoutProps) {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuthenticationStatus();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading || isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl p-4 mx-auto">
          <p className="grid justify-start grid-flow-col gap-1">
            <Loader /> Loading user...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
