# jquery.dataOptions.js

get element data options



### Useage:
```html
<div id="div1" data-min="1" data-max="2"></div>
<div id="div2" data-op-min="1" data-op-max="2"></div>
```

```javascript
$('#div1').dataOptions(['min', 'max']);
$('#div2').dataOptions(['min', 'max'], 'op');
```
