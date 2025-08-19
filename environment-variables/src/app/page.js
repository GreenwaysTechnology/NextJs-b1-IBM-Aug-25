import Client from "./components/client";

export default function Home() {

  return <div className="m-50">
    <h1>Environment Variables</h1>
    <h1>.Env File : {process.env.MESSAGE}</h1>
    <h2>.env.development : {process.env.MYVAR}</h2>
    <h2>.env.production : {process.env.MYVARPROD}</h2>
    <h2>.env.local : {process.env.MYVARLOCAL}</h2>
    <h2>Greet Variable In All ENV : {process.env.GREET}</h2>
    <Client/>
  </div>
}