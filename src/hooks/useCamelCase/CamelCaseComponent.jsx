import useCamelCase from './useCamelCase';

function CamelCaseComponent() {
  const camelCasedValue = useCamelCase('camel-case', '-');

  return <div>{camelCasedValue}</div>;
}

export default CamelCaseComponent;
