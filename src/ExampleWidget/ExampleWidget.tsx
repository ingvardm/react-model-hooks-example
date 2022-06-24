import ExampleWidgetButtonAdd from "./ExampleWidgetButtonAdd"
import ExampleWidgetButtonMulti from "./ExampleWidgetButtonMultiply"
import ExampleWidgetButtonReset from "./ExampleWidgetButtonReset"
import ExampleWidgetCounter from "./ExampleWidgetCounter"
import { ExampleModelHooks } from "./ExampleWidgetModel"

const ExampleWidget = ExampleModelHooks.withProvider(({
	model: exampleModel,
}) => {
	exampleModel.useEvent('clear', exampleModel.reset)

	return <div>
		<ExampleWidgetCounter/>
		<ExampleWidgetButtonAdd/>
		<ExampleWidgetButtonMulti scale={2}/>
		<ExampleWidgetButtonReset/>
	</div>
})

export default ExampleWidget
