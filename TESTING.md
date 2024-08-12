# Testing use cases

1. The component should emit full result object when clicked at Apply button OR calendar icon including:

```json
{
  "compare": true/false,
  "dateStart": "YYYY-MM-DD",
  "dateUntil": "YYYY-MM-DD",
  "compareStart": "YYYY-MM-DD",
  "compareUntil": "YYYY-MM-DD",
  "primaryPreset": null/String[preset name],
  "comparePreset": null/String[preset name]
}
```

2. When provided no initial values, the component should assume default values and render them in the button.

3. When provided any initial values, the initial values should overwrite the default value and reder component button using those provided initial values.

4. When provided a preset, preset should overwrite From & To selections and reder component button using those provided initial values.

5. In DARK mode the component valendar icons shoul be white

6. Show use case with component transaparent button background for light and dark theme - you can add a checkbox to demo form to demonstrate this.

7. Demonstrate manual date range selections using calendar circles when component opens dialog window for default date range and compare date range: manually select range for each period using clicks on the opened calendard on the left hand side of From & To fields. Switch between range by clicking at preset fields or From & To fields between primary and compare periods.
