class allowSave{
  constructor(){
    return (form : ng.IFormController, model : any, originalModel : any) => {
      var formIsValid = form.$dirty && form.$valid;
      var hasChange = (model && originalModel) && JSON.stringify(model) !== JSON.stringify(originalModel);
      return formIsValid;// && hasChange;
    }
  }
}

app.filter('allowSave', allowSave);
