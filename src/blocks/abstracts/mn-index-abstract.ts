import { OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

/**
 * IndexAbstract
 * @description Base class for standard list screen
 *
 */
export abstract class MnIndexAbstract implements OnDestroy, OnInit {
    /** Search condition subject */
    abstract search$: BehaviorSubject<any>;
    /** List data Subject */
    abstract items$: Subject<any[]>;
    /** Initial search condition */
    abstract defaultSearch: object = {};
    /** Loading state */
    abstract listRequested: boolean;
    /** Flag to execute initial search (If params exists in URL, it is executed irrespective of flag) */
    abstract isInitRequest: boolean;
    /** Fetch data */
    abstract fetchItems(params: any);

    /**
     * constructor
     */
    constructor() {
    }

    ///////////////////////////////////
    // NG LIFE CYCLE //////////////////
    ///////////////////////////////////
    /**
     * ngOnInit
     */
    ngOnInit() {
        this.setupSubjects();
        this.setupQueryParamsSubscription();
    }
    /**
     * ngOnDestroy
     */
    ngOnDestroy() {
        // Cleaning subscription
    }

    ///////////////////////////////////
    // SETUP //////////////////////////
    ///////////////////////////////////
    /**
     * Create required subject
     */
    setupSubjects() {
        this.search$ = new BehaviorSubject<any>(null);
        this.items$ = new Subject<any>();
    }
    /**
     * Create Subscription to synchronize URL and list search condition
     */
    setupQueryParamsSubscription() {
        // Run initial search condition
        this.search$.next(Object.assign({}, this.defaultSearch));
        // TODO: A search condition flows based on URL's queryParams
    }

    ///////////////////////////////////
    // FETCH RESOURSE /////////////////
    ///////////////////////////////////
    /**
     * Re-fetch list data (under current search condition)
     */
    reFetchItems() {
        this.fetchItems(this.search$.getValue());
    }

    ///////////////////////////////////
    // SEARCH EVENT HANDLER ///////////
    ///////////////////////////////////
    /*
     * Search handle
     */
    onSearchStart(search) {
        this.search$.next(search);
        this.reFetchItems();
        // TODO sync URL
    }
    /**
     * Reset search
     */
    onSearchReset() {
        this.search$.next(Object.assign({}, this.defaultSearch));
        this.reFetchItems();
        // TODO sync URL
    }
    /**
     * Handler for changing the number of pages
     */
    onPageChanged(page) {
        // Merging pages to current search
        this.search$.next(Object.assign({}, this.search$.getValue(), { page: page }));
        this.reFetchItems();

        // TODO sync URL
    }
}
