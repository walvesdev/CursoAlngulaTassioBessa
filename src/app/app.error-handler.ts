import { Observable } from 'rxjs';
import { HttpErrorResponse } from "@angular/common/http";

class ManipladorErros {

    static CapturaErro(error: HttpErrorResponse) {
        let menssagemErro: string;

        if (error instanceof ErrorEvent) {
            menssagemErro = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
        } else {
            menssagemErro = error.toString();
        }
        debugger
        console.log(menssagemErro)

        return Observable.throw(menssagemErro)
    }
}
export { ManipladorErros }