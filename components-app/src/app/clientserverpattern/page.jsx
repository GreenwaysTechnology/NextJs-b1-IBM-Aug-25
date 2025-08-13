import Client from "@/app/clientserverpattern/components/client";
import Server from "@/app/clientserverpattern/components/server"

export default function Page() {

    return <>
        {/* <Client /> */}
        <Client>
            {/* Pass server component as prop to Client */}
            <Server />
        </Client>
    </>
}