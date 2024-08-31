import Image from "next/image";
import HeartIcon from  "../../public/images/heart.png";
/**
 * `app/entry/page.js` is the UI for the `/entry` URL
 */

export default function Page() {
  return (
    <main className="md:container md:mx-auto">
      <h1>Hello, Entry Page!</h1>
      {/* <form onSubmit="event.preventDefault(); checkCodes();">
        <label htmlFor="code1">Code 1:</label>
        <input type="text" id="code1" name="code1"><br/>
        <label htmlFor="code2">Code 2:</label>
        <input type="text" id="code2" name="code2"><br/>
        <label htmlFor="code3">Code 3:</label>
        <input type="text" id="code3" name="code3"><br/>
        <label htmlFor="code4">Code 4:</label>
        <input type="text" id="code4" name="code4"><br/>
        <button type="submit">Submit</button>
      </form> */}
      <form action="" method="get" className="flex flex-row p-4">
        <div className="basis-1/5">
          <label htmlFor="code1">Code 1: </label>
          <input type="text" name="code1" id="code1" className="h-40" required />
        </div>
        <div className="basis-1/5">
          <label htmlFor="code2">Code 2: </label>
          <input type="text" name="code2" id="code2" className="h-40" required />
        </div>
        <Image src={HeartIcon} className="basis 1/5" />
        <div className="basis-1/5">
          <label htmlFor="code3">Code 3: </label>
          <input type="text" name="code3" id="code3" className="h-40" required />
        </div>
        <div className="basis-1/5">
          <label htmlFor="code4">Code 4: </label>
          <input type="text" name="code4" id="code4" className="h-40" required />
        </div>
      </form>
    </main>
  );
}