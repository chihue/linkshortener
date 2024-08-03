import ErrorPage from "@/components/ErrorPage";

export default function ErrorRedirectPage() {
    return <ErrorPage
        title="Link not found"
        description="Sorry, we couldn't find the link you were looking for."
        showButton={false}
    />
}