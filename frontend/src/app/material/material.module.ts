import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MaterialModule { }