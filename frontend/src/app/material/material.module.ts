import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MaterialModule { }
