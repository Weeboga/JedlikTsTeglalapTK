
import * as http from "http";
import { ParsedUrlQuery } from "querystring";
import * as url from "url";


export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {


        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<html>");
        // a weboldal fejléce
        res.write("<head>");
        res.write("<title>TéglalapTK</title>");

        res.write("</head>");

        res.write("<body><form style = 'font-family:Courier; font-size:24px;'>");

        res.write("<h1>Téglalap területe és kerülete</h1>");

        const query: ParsedUrlQuery = url.parse(req.url, true).query;
        const a = query.aInput === undefined || query.aInput === "" ? 5 : parseFloat(query.aInput as string);
        const b = query.bInput === undefined || query.bInput === "" ? 5 : parseFloat(query.bInput as string);

        res.write(`<p>a= `);
        res.write(`<input type='number' name='aInput' value=${a} onChange='this.form.submit();'></p>`)
        res.write(`<p>b= `);
        res.write(`<input type='number' name='bInput' value=${a} onChange='this.form.submit();'></p>`)
        const terulet: number = a * b;
        const kerulet: number = 2 * (a + b);
        res.write(`<p>Terület=${terulet}</p>`);
        res.write(`<p>Kerület=${kerulet}</p>`);

        res.write("</form></body>");

        res.write("</html>");
        res.end();
    }
}
