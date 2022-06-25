export class Application {
  status = undefined;
  notes =  undefined;
  files = undefined;

  constructor (status, notes, files) {
    this.status = status
    this.notes = notes
    this.files = files
  }
  getStatus () {
    return this.status
  }
  getNotes () {
    return this.notes
  }
  getFiles () {
    return this.files
  }
  setStatus (status) {
    this.status = status
  }
  setNotes (notes) {
    this.notes = notes
  }
  setFiles (files) {
    this.files = files
  }
}
