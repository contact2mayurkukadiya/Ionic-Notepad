import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Note } from '../model/note.model';
import * as NoteActions from '../actions/note.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  notes: Observable<Note[]>;

  constructor(private alertCtrl: AlertController, private navCtrl: NavController, private store: Store<AppState>) {
    this.notes = store.select('Notes');
  }

  ngOnInit() {
  }

  addNote() {

    this.alertCtrl.create({
      header: 'New Note',
      message: 'What should the title of this note be?',
      inputs: [
        {
          type: 'text',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            let max = 0;
            this.notes.forEach(element => {
              element.forEach(note =>{
                max = Math.max(parseInt(note.id), max)
              })
            });
            // (Math.max(...this.notes.forEach(note => parseInt(note.id)), 0) + 1).toString()
            this.store.dispatch(new NoteActions.AddNote({ id : (max + 1).toString(), title: data.title, content: '', customTag: "" }));
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });

  }

  toggleState(){
    // this.store.dispatch()
  }

}