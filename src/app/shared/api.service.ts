import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spediter } from 'app/spediter/model/Spediter';
import { Memorandum } from 'app/memorandum/model/Memorandum';
import { VrstaOvlascenja } from 'app/vrste-ovlascenja/model/VrstaOvlascenja';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private GET_SPEDITERI = 'http://localhost:9002/spediter/all';
    private SAVE_SPEDITER = 'http://localhost:9002/spediter/new';
    private SEARCH_SPEDITER = 'http://localhost:9002/spediter/search?';
    private PUT_SPEDITER = 'http://localhost:9002/spediter/update';
    private DELETE_SPEDITER = 'http://localhost:9002/spediter/delete/';
    private FIND_SPEDITER ='http://localhost:9002/spediter/';
    private GET_MEMORANDUMI = 'http://localhost:9002/memorandum/all';
    private SEARCH_MEMORANDUM = 'http://localhost:9002/memorandum/search?';
    private GET_VRSTE_OVLASCENJA = 'http://localhost:9002/vrstaovlascenja/all';
    private DELETE_MEMORANDUM = 'http://localhost:9002/memorandum/delete/';
    private SAVE_MEMORANDUM = 'http://localhost:9002/memorandum/new';
    private PUT_MEMORANDUM = 'http://localhost:9002/memorandum/update/';

    constructor(private http: HttpClient) { }

    getSpediteri(): Observable<Spediter[]> {
        return this.http.get<Spediter[]>(this.GET_SPEDITERI);
    }

    saveSpediter(spediter: Spediter): Observable<Spediter> {
        return this.http.post<Spediter>(this.SAVE_SPEDITER, spediter);
    }

    serachSpediter(id: number, naziv: string, adresa: string, 
        telefon: string, pib: string): Observable<Spediter[]> {
        var url_nastavak = '';
        if (id != undefined) { url_nastavak = url_nastavak + '&id=' + id; }
        if (naziv != undefined) { url_nastavak = url_nastavak + '&naziv=' + naziv; }
        if (adresa != undefined) { url_nastavak = url_nastavak + '&adresa=' + adresa; }
        if (telefon != undefined) { url_nastavak = url_nastavak + '&telefon=' + telefon; }
        if (pib != undefined) { url_nastavak = url_nastavak + '&pib=' + pib; }
        return this.http.get<Spediter[]>(this.SEARCH_SPEDITER + url_nastavak);
    }

    putSpediter(spediter: Spediter): Observable<Spediter> {
        return this.http.put<Spediter>(this.PUT_SPEDITER, spediter);
    }

    deleteSpediter(id: number): Observable<any> {
        return this.http.delete(this.DELETE_SPEDITER + id);
    }

    findSpediter(id: number): Observable<Spediter> {
        return this.http.get<Spediter>(this.FIND_SPEDITER+id);
    }

    getMemorandumi(): Observable<Memorandum[]> {
        return this.http.get<Memorandum[]>(this.GET_MEMORANDUMI);
    }

    searchMemorandum(id: number, datumOd: Date, spediter: string,
         status: string): Observable<Memorandum[]> {
        var url_nastavak = '';
        if (id != undefined) { url_nastavak = url_nastavak + '&id=' + id; }
        if (datumOd != undefined) { url_nastavak = url_nastavak + '&datumOd=' + datumOd; }
        if (spediter != undefined) { url_nastavak = url_nastavak + '&spediter=' + spediter; }
        if (status != undefined) { url_nastavak = url_nastavak + '&status=' + status; }
        return this.http.get<Memorandum[]>(this.SEARCH_MEMORANDUM + url_nastavak);
    }

    getVrsteOvlascenja(): Observable<VrstaOvlascenja[]> {
        return this.http.get<VrstaOvlascenja[]>(this.GET_VRSTE_OVLASCENJA);
    }

    deleteMemorandum(id: number): Observable<any> {
        return this.http.delete(this.DELETE_MEMORANDUM + id);
    }

    putMemorandum(memorandum: Memorandum): Observable<Memorandum> {
        return this.http.put<Memorandum>(this.PUT_MEMORANDUM + memorandum.memorandumID, memorandum);
    }

    saveMemorandum(memorandum: Memorandum): Observable<Memorandum> {
        return this.http.post<Memorandum>(this.SAVE_MEMORANDUM, memorandum);
    }
}