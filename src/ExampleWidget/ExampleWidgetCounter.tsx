import { ExampleModelHooks } from "./ExampleWidgetModel"

const ExampleWidgetCounter = ExampleModelHooks.withModel(({
	model: exampleModel,
}) => {
	const [count] = exampleModel.useState('count')

	return <h3>{`${count}`}</h3>
})

export default ExampleWidgetCounter
