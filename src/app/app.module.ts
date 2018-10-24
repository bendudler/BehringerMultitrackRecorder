import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTableModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatSortModule, MAT_DATE_LOCALE, MatTreeModule, MatExpansionModule, MatSnackBarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ChannelsTableComponent} from './channels/table/channelsTable.component';
import { SecurityCheckDialogComponent } from './common/security-check-dialog/security-check-dialog.component';
import {ChannelService} from './channels/service/channel.service';
import { CreateChannelDialogComponent } from './channels/create-channel-dialog/create-channel-dialog.component';
import {RecorderComponent} from './recorder/recorder/recorder.component';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { RecordingTimerComponent } from './recorder/recording-timer/recording-timer.component';
import { RecordingsListComponent } from './recordings-list/recordings-list.component';
import { CreateRecordingDialogComponent } from './recorder/create-recording-dialog/create-recording-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelsTableComponent,
    SecurityCheckDialogComponent,
    CreateChannelDialogComponent,
    RecorderComponent,
    RecordingTimerComponent,
    RecordingsListComponent,
    CreateRecordingDialogComponent
  ],
  entryComponents: [SecurityCheckDialogComponent, CreateChannelDialogComponent, CreateRecordingDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSortModule,
    MatMomentDateModule,
    MatTreeModule,
    MatExpansionModule,
    MatSnackBarModule
  ],
  providers: [ChannelService, {provide: MAT_DATE_LOCALE, useValue: 'de-CH'}],
  bootstrap: [AppComponent]
})

export class AppModule { }
