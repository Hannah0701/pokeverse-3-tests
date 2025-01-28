/**
 * Renders an alert without the ARIA alert role.
 * Because of its intrusive nature, the alert role must be used sparingly.
 * {@see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role}
 */
export default function CustomAlert({ variant = "primary", ...props }) {
  const classes = ["alert"];

  if (variant) {
    classes.push(`alert-${variant}`);
  }

  return <div className={classes.join(" ")}>{props.children}</div>;
}
