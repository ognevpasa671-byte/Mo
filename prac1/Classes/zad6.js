class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(dep) {
    this.departments.push(dep);
  }

  removeDepartment(dep) {
    this.departments = this.departments.filter(d => d !== dep);
  }

  showDepartments() {
    return this.departments.join(', ');
  }
}

const uni = new University('БГУ');

uni.addDepartment('Физика');
uni.addDepartment('Математика');
uni.addDepartment('Информатика');

console.log(uni.showDepartments()); 

uni.removeDepartment('Математика');

console.log(uni.showDepartments()); 
