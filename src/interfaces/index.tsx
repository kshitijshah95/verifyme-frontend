import { Component } from 'react';

export interface IRoute {
    path: string;
    component: any;
    routes?:  IRoute[];
}

