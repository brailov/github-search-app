import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSortModule  } from "@angular/material/sort";
import { MatTableModule  } from "@angular/material/table";
import { MatPaginatorModule  } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon"
import { MatDialogModule  } from "@angular/material/dialog";
import { MatMenuModule  } from "@angular/material/menu";
import { MatToolbarModule  } from "@angular/material/toolbar";
import { MatSidenavModule  } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
    exports:[
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatDialogModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialModule{}
