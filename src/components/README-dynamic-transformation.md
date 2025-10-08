# Dynamic Footer Transformation Text

This system allows each page to customize the "Ready to Transform..." section in the footer with page-specific content.

## How It Works

The footer CTA section is now dynamic and uses React Context to manage the transformation text. Each page can set its own custom title and subtitle for the footer section.

## Usage

### 1. Import the TransformationSetter Component

```tsx
import TransformationSetter from '@/components/TransformationSetter';
```

### 2. Add TransformationSetter to Your Page

Add the `TransformationSetter` component at the very beginning of your page's JSX return statement:

```tsx
export default function YourPage() {
  return (
    <>
      <TransformationSetter 
        title="Ready to Transform Your [Service]?"
        subtitle="Custom subtitle describing your specific service transformation..."
      />
      
      {/* Rest of your page content */}
    </>
  );
}
```

## Examples

### Garage Floor Coatings
```tsx
<TransformationSetter 
  title="Ready to Transform Your Garage?"
  subtitle="Join satisfied Northeast Florida homeowners who chose Brightway Coatings for garage transformations with 15 year durability, one-day installation, and unmatched craftsmanship."
/>
```

### Patio Coatings
```tsx
<TransformationSetter 
  title="Ready to Transform Your Patio?"
  subtitle="Join satisfied Northeast Florida homeowners who chose Brightway Coatings for patio transformations with UV-resistant coatings, beautiful finishes, and unmatched durability."
/>
```

### Pool Deck Coatings
```tsx
<TransformationSetter 
  title="Ready to Transform Your Pool Deck?"
  subtitle="Join satisfied Northeast Florida homeowners who chose Brightway Coatings for safe, beautiful pool deck transformations with slip-resistant surfaces and unmatched durability."
/>
```

## Default Behavior

If a page doesn't include a `TransformationSetter` component, the footer will show the default text:
- **Title:** "Ready to Transform Your Concrete?"
- **Subtitle:** "Join satisfied Northeast Florida homeowners who chose Brightway Coatings for 15 year durability, one-day installation, and unmatched craftsmanship."

## Advanced Usage

### Custom Subtitle Generation

If you only provide a title, the context will automatically generate a subtitle based on the service name:

```tsx
<TransformationSetter title="Ready to Transform Your Driveway?" />
// Automatically generates: "Join satisfied Northeast Florida homeowners who chose Brightway Coatings for driveway transformations with 15 year durability, one-day installation, and unmatched craftsmanship."
```

### Accessing Context Directly

For more complex use cases, you can use the transformation context directly:

```tsx
import { useTransformation, useSetTransformation } from '@/contexts/TransformationContext';

function CustomComponent() {
  const { title, subtitle } = useTransformation();
  const setTransformation = useSetTransformation();
  
  // Use current values or set new ones
  setTransformation('Custom Title', 'Custom Subtitle');
}
```

## Page-Specific Recommendations

- **Home Page:** Use default "Ready to Transform Your Concrete?"
- **Service Pages:** Use "Ready to Transform Your [Service Area]?"
- **Location Pages:** Use "Ready to Transform Your [Location] Concrete?"
- **About/Contact:** Can use default or customize as needed

## Technical Details

- Uses React Context for state management
- Context provider is added at the layout level
- TransformationSetter component renders nothing (null) - it only sets the context state
- Footer component subscribes to context changes and updates automatically
- State persists across navigation within the session


