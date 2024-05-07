import { useRouteError } from "react-router";

function ErrorBoundary() {
	const error = useRouteError();
	console.log(error);

	return <div>Error</div>;
}
export default ErrorBoundary;
