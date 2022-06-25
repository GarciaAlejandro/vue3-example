export class Marketplace {
    key = undefined;
    id = undefined;
    label = undefined;
    authorities = undefined;
    constructor (key, id, label, authorities) {
      this.key = key
      this.id = id
      this.label = label
      this.authorities = authorities
    }
    getKey () {
      return this.key
    }
    getId () {
      return this.id
    }
    getLabel () {
      return this.label
    }
    getAuthorities () {
      return this.authorities
    }
    setKey (key) {
      this.key = key
    }
    setId (id) {
      this.id = id
    }
    setLabel (label) {
      this.label = label
    }
    setAuthorities (authorities) {
      this.authorities = authorities
    }
}
