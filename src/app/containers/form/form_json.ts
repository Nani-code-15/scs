
export const formItems: any[] = [
    //inputtext
    {
      FormId: '',
      FieldLable: 'Text Field',
      Fieldname: 'inputtext',
      icon:'fa-text-width',
      size: { name: "12", code: 12},
      DBColName: 'inputtxt',
      Label: 'Text Field',
      PlaceHolder: 'Text Field',
      ErrorTxt: '',
      ID: '',
      Class: '',
      Required: false,
      HelpTxt: '',
      pKeyFilter:{ name: "All", code: "all"},
      pKeyFilterOther: "",
      functionName: "",
      Disabled: false,
      ForceDisabled: false,
      MaxTextLength: 32,
    },
    //password
    {
      FormId: '',
      FieldLable: 'Password Field',
      Fieldname: 'inputpassword',
      icon:'fa-key ',
      size: { name: "12", code: 12},
      DBColName: 'inputpass',
      Label: 'Password Field',
      PlaceHolder: 'Password Field',
      ErrorTxt: '',
      ID: '',
      Class: '',
      Required: false,
      HelpTxt: '',
      functionName: "",
      Disabled: false,
      ForceDisabled: false,
    },
    //dropdown
    {
      FormId: '',
      FieldLable: 'Drop Down',
      Fieldname: 'dropdown',
      icon:'fa-caret-square-o-down',
      size: { name: "12", code: 12},
      DBColName: 'inputtxt',
      Label: 'Drop Down',
      PlaceHolder: 'Drop Down',
      ErrorTxt: '',
      ID: '',
      Class: '',
      Required: false,
      HelpTxt: '',
      functionName: "",
      OptionsURL: "",
      Option: [],
      optlable: 'name',
      optCode: 'code',
      filter: true,
      showclear: true,
      Disabled: false,
      ForceDisabled: false,
    },
    //multiselect
    {
      FormId: '',
      FieldLable: 'MultiSelect',
      Fieldname: 'multiselect',
      icon:'fa-caret-square-o-down',
      size: { name: "12", code: 12},
      DBColName: 'inputtxt',
      Label: 'Drop Down MultiSelect',
      PlaceHolder: 'Drop Down MultiSelect',
      ErrorTxt: '',
      ID: '',
      Class: '',
      Required: false,
      HelpTxt: '',
      functionName: "",
      OptionsURL: "",
      Option: [],
      optlable: 'name',
      optCode: 'code',
      filter: true,
      showclear: true,
      Disabled: false,
      ForceDisabled: false,
    },
    //inputtext
    {
      FormId: '',
      FieldLable: 'Text Area',
      Fieldname: 'textarea',
      icon:'fa-square-o',
      size: { name: "12", code: 12},
      DBColName: 'inputtxt',
      Label: 'Text Area',
      PlaceHolder: 'Text Area',
      ErrorTxt: '',
      ID: '',
      Class: '',
      Required: false,
      HelpTxt: '',
      functionName: "",
      row: 5,
      col: 50,
      Disabled: false,
      ForceDisabled: false,
      MaxTextLength: 500,
    },
    //calander
    {
      FormId: '',
      FieldLable: 'Date Picker',
      Fieldname: 'calander',
      icon:'fa-calendar',
      size: { name: "12", code: 12},
      DBColName: 'inputtxt',
      Label: 'Date Picker',
      ErrorTxt: '',
      ID: '',
      Class: '',
      Required: false,
      HelpTxt: '',
      functionName: "",
      dateformat:'dd.mm.yy',
      showTime: false,
      timeOnly: false,
      Disabled: false,
      ForceDisabled: false,
    },
    //editor
    {
      FormId: '',
      FieldLable: 'wysiwyg Editor',
      Fieldname: 'editor',
      icon:'fa-pencil-square',
      size: { name: "12", code: 12},
      DBColName: 'inputtxt',
      Label: 'Text Editor',
      ErrorTxt: '',
      ID: '',
      Class: '',
      Required: false,
      HelpTxt: '',
      functionName: "",
      Disabled: false,
      ForceDisabled: false,
    },
    //inputswitch
    {
      FormId: '',
      FieldLable: 'Switch',
      Fieldname: 'inputswitch',
      icon:'fa-check-circle',
      size: { name: "12", code: 12},
      DBColName: 'inputtxt',
      Label: 'Switch',
      PlaceHolder: 'Switch',
      ErrorTxt: '',
      ID: '',
      Class: '',
      Required: false,
      HelpTxt: '',
      functionName: "",
      Disabled: false,
      ForceDisabled: false,
    },
    //inputtext
    {
      FormId: '',
      FieldLable: 'upload',
      Fieldname: 'upload',
      icon:'fa-cloud-upload ',
      size: { name: "12", code: 12},
      DBColName: 'inputupload',
      Label: 'Upload',
      PlaceHolder: 'Upload',
      ErrorTxt: '',
      ID: '',
      Class: '',
      Required: false,
      HelpTxt: '',
      accept: 'image/*',
      maxsize: '1090000',
      Disabled: false,
      ForceDisabled: false,
    },
    //submitbutton
    {
      FormId: '',
      FieldLable: 'Submit Button',
      Fieldname: 'submitbutton',
      icon:'fa-check',
      size: { name: "12", code: 12},
      Label: 'Submit',
      LabelIcon: 'pi pi-check',
      ID: '',
      Class: 'p-button-secondary',
      functionName: "",
      Disabled: false,
      ForceDisabled: false,
    }
  ];