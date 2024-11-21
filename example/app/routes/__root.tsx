import {
	Outlet,
	ScrollRestoration,
	createRootRoute,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import "~/main.css";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],

		// links: [{ rel: "stylesheet", href: appCss }],
	}),
	component: RootComponent,
	pendingComponent: () => <div>Loading...</div>,
	errorComponent: () => <div>Error</div>,
	notFoundComponent: () => <div>Not Found</div>,
});

function RootComponent() {
	return (
		<RootDocument>
			<NextUIProvider>
				<Outlet />
			</NextUIProvider>
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<Meta />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}
