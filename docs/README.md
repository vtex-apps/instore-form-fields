# Instore Form Fields

This is an VTEX IO app that provides the tooling for adding extra fields on your Instore Customer Profile Registration Form.

It is as simple as creating a new IO React App and adding

```
    "registration-container/{{whatever-name}}": {
      "component": "vtex.instore-form-fields/FormInput",
      "props": {
        "ffor": "{{key on Masterdata}}",
        "nameKey": "{{locale key to label the input}}",
        "initialValue": "{{if any, it is optional}}"
      }
    },
```

And also, don't forget to [add the same key on Masterdata](http://help.vtex.com/pt/faq/como-crio-um-campo-no-master-data) you mentioned on your app, otherwise it won't save a thing.