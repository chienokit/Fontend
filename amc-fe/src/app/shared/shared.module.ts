import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { BadgeComponent } from './components/badge/badge.component';
import { ButtonActionComponent } from './components/button-action/button-action.component';
import { ButtonComponent } from './components/button/button.component';
import { EditorComponent } from './components/editor/editor.component';
import { FileComponent } from './components/file/file.component';
import { ModalFileComponent } from './components/modal-file/modal-file.component';
import { ModalComponent } from './components/modal/modal.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { NotBlankComponent } from './components/not-blank/not-blank.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SelectAllComponent } from './components/select-all/select-all.component';
import { TableTitleComponent } from './components/table-title/table-title.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { UploadSimpleComponent } from './components/upload-simple/upload-simple.component';
import { UploadComponent } from './components/upload/upload.component';
import { ValidateMessageComponent } from './components/validate-message/validate-message.component';
import { DebounceClickDirective } from './directive/debounce-click.directive';
import { DebounceKeyupDirective } from './directive/debounce-keyup.directive';
import { DebounceDirective } from './directive/debounce.directive';
import { DecimalFormatterDirective } from './directive/decimal-number-formatter.directive';
import { HasRolesDirective } from './directive/has-roles.directive';
import { NumberFormatterDirective } from './directive/number-formatter.directive';
import { NumbersCharacterBasicDirective } from './directive/numbers-character-basic.directive';
import { NumbersOnlyDirective } from './directive/numbers-only.directive';
import {RemoveOptionTitleDirective} from './directive/remove-option-title.directive';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import { CurrencyVNDPipe } from './pipe/currency.pipe';
import { FilePublicComponent } from './components/file-public/file-public.component';
import { HasUserLevelDirective } from './directive/has-user-level.directive';

@NgModule({
  declarations: [
    HasRolesDirective,
    DebounceDirective,
    NumberFormatterDirective,
    DecimalFormatterDirective,
    NumbersCharacterBasicDirective,
    DebounceKeyupDirective,
    DebounceClickDirective,
    NumbersOnlyDirective,
    CurrencyVNDPipe,
    ModalComponent,
    TableTitleComponent,
    UploadComponent,
    EditorComponent,
    UploadSimpleComponent,
    ButtonComponent,
    BadgeComponent,
    ButtonActionComponent,
    PaginationComponent,
    FileComponent,
    FilePublicComponent,
    ModalFileComponent,
    SelectAllComponent,
    NoDataComponent,
    NotBlankComponent,
    UploadImageComponent,
    ValidateMessageComponent,
    RemoveOptionTitleDirective,
    HasUserLevelDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    TranslateModule,
    NzNotificationModule,
    NzFormModule,
    NzRadioModule,
    NzTableModule,
    NzDividerModule,
    NzSwitchModule,
    NzIconModule,
    NzToolTipModule,
    NzTabsModule,
    NzPaginationModule,
    NzCardModule,
    NzButtonModule,
    NzBadgeModule,
    NzInputModule,
    NzDropDownModule,
    NzModalModule,
    NzCheckboxModule,
    NzPopoverModule,
    NzUploadModule,
    NzMessageModule,
    NzDatePickerModule,
    NzSelectModule,
    NzCollapseModule,
    NzEmptyModule,
    NzBreadCrumbModule,
    NzImageModule,
    NzBackTopModule,
    NzCarouselModule,
  ],
  exports: [
    HasRolesDirective,
    DecimalFormatterDirective,
    DebounceDirective,
    NumberFormatterDirective,
    DebounceKeyupDirective,
    DebounceClickDirective,
    NumbersCharacterBasicDirective,
    NumbersOnlyDirective,
    CurrencyVNDPipe,
    ModalComponent,
    PaginationComponent,
    NotBlankComponent,
    SelectAllComponent,
    NoDataComponent,
    ModalFileComponent,
    EditorComponent,
    ButtonActionComponent,
    FileComponent,
    FilePublicComponent,
    ButtonComponent,
    BadgeComponent,
    UploadSimpleComponent,
    UploadImageComponent,
    UploadComponent,
    TableTitleComponent,
    CommonModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    TranslateModule,
    NzNotificationModule,
    NzFormModule,
    NzRadioModule,
    NzTableModule,
    NzDividerModule,
    NzSwitchModule,
    NzIconModule,
    NzToolTipModule,
    NzTabsModule,
    NzPaginationModule,
    NzCardModule,
    NzButtonModule,
    NzBadgeModule,
    NzInputModule,
    NzDropDownModule,
    NzModalModule,
    NzCheckboxModule,
    NzPopoverModule,
    NzUploadModule,
    NzMessageModule,
    NzDatePickerModule,
    NzSelectModule,
    NzCollapseModule,
    NzEmptyModule,
    NzBreadCrumbModule,
    NzImageModule,
    NzBackTopModule,
    ValidateMessageComponent,
    RemoveOptionTitleDirective,
    NzCarouselModule,
    HasUserLevelDirective
  ],
  providers: [
    DatePipe,
    NumbersOnlyDirective,
    DecimalFormatterDirective,
    DebounceDirective,
    NumberFormatterDirective,
    CurrencyVNDPipe,
    NumbersCharacterBasicDirective
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {
}
