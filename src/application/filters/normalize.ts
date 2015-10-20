class normalize{
  constructor(){
    return (string : string) => {
      return string.replace('.', '_');
    }
  }
}

app.filter('normalize', normalize);
