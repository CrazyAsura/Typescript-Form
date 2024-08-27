class Person{
      private id: number;
      private name: string;
      private email: string;
      private ddd: number;
      private phone: number;
      private number_residence: number;
      private street: string;
      private district: string;
      private city: string;
      private state: string;
      private cep: number;
      private password: string;

      private constructor( 
          id: number,
          name: string,
          email: string,
          ddd: number,
          phone: number,
          number_residence: number,
          street: string,
          district: string,
          city: string,
          state: string,
          cep: number,
          password: string,
      ){
          this.id = id;
          this.name = name;
          this.email = email;
          this.ddd = ddd;
          this.phone = phone;
          this.number_residence = number_residence;
          this.street = street;
          this.district = district;
          this.city = city;
          this.state = state;
          this.cep = cep;
          this.password = password;
      }

      public getID(): number {
          return this.id;
      }
      public getName(): string {
          return this.name;
      }

      public getEmail(): string {
          return this.email;
      }

      public getDDD(): number {
          return this.ddd;
      }

      public getPhone(): number {
          return this.phone;
      }

      public getNumber_residence(): number {
          return this.number_residence;
      }

      public getStreet(): string {
          return this.street;
      }

      public getDistrict(): string {
          return this.district;
      }

      public getCity(): string {
          return this.city;
      }

      public getState(): string {
          return this.state;
      }

      public getCep(): number {
          return this.cep;
      }

      public getPassword(): string | number {
          return this.password;
      }

      public setName(name: string): void {
          this.name = name;
      }

      public setEmail(email: string): void {
          this.email = email;
      }

      public setDDD(ddd: number): void {
          this.ddd = ddd;
      }

      public setPhone(phone: number): void {
          this.phone = phone;
      }

      public setNumber_residence(number_residence: number): void {
          this.number_residence = number_residence;
      }

      public setStreet(street: string): void {
          this.street = street;
      }

      public setDistrict(district: string): void {
          this.district = district;
      }

      public setCity(city: string): void {
          this.city = city;
      }

      public setState(state: string): void {
          this.state = state;
      }

      public setCep(cep: number): void {
          this.cep = cep;
      }

      public setPassword(password: string): void {
          this.password = password;
      }
  }

interface PersonDAOInterface{
    buildPersonDAO(data: object): any;
    getPersonDAO(id: number): any;
    insertPersonDAO(person: any): any;
    updatePersonDAO(person: any): any;
    deletePersonDAO(person: any): any;
}

