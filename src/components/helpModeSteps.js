/**
 * Help mode tour steps for ScaffoldVuer.
 * `id` matches the `data-help-id` attribute of the target element.
 * `area` is one of the `HELP_MODE_AREAS` keys from `@abi-software/map-utilities`.
 */
const scaffoldHelpModeSteps = [
  {
    id: 'regions',
    area: 'legends',
    title: 'Regions',
    description:
      'Show or hide the regions of the scaffold using the checkboxes. Click on a region name to select it.',
    placement: 'right',
  },
  {
    id: 'warning',
    area: 'map-info',
    title: 'About this scaffold',
    placement: 'right',
  },
  {
    id: 'whats-new',
    area: 'map-info',
    title: "What's new?",
    placement: 'right',
  },
  {
    id: 'slider',
    area: 'animation',
    title: 'Animation',
    description: 'Play or move the slider to animate the scaffold over time.',
    placement: 'top',
  },
  {
    id: 'zoom-in',
    area: 'zoom',
    title: 'Zoom in',
    description: 'Zoom in to see more detail. You can also scroll on the scaffold.',
    placement: 'left',
  },
  {
    id: 'zoom-out',
    area: 'zoom',
    title: 'Zoom out',
    description: 'Zoom out to see more of the scaffold.',
    placement: 'top',
  },
  {
    id: 'zoom-fit',
    area: 'zoom',
    title: 'Fit to window',
    description: 'Reset the view so the whole scaffold fits in the window.',
    placement: 'top',
  },
  {
    id: 'open-map',
    area: 'map-settings',
    title: 'Open new map',
    description: 'Open a related map in a new view.',
    placement: 'right',
  },
  {
    id: 'settings',
    area: 'map-settings',
    title: 'Settings',
    description: 'Change the settings, such as the viewing mode, colours and the background.',
    placement: 'right',
  },
  {
    id: 'draw-edit',
    area: 'drawing',
    title: 'Edit mode',
    description: 'Select a drawn feature to edit it or add a comment.',
    placement: 'top',
  },
  {
    id: 'draw-point',
    area: 'drawing',
    title: 'Draw point',
    description: 'Draw a point on the scaffold to annotate a location.',
    placement: 'top',
  },
  {
    id: 'draw-line-string',
    area: 'drawing',
    title: 'Draw line',
    description: 'Draw a line on the scaffold.',
    placement: 'top',
  },
  {
    id: 'draw-delete',
    area: 'drawing',
    title: 'Delete mode',
    description: 'Select a drawn feature to delete it.',
    placement: 'top',
  },
];

export { scaffoldHelpModeSteps };
