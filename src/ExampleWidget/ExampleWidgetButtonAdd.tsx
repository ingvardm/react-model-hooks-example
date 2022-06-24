import { useCallback } from "react";

import { ExampleModelHooks } from "./ExampleWidgetModel";

const ExampleWidgetButtonAdd = ExampleModelHooks.withModel(({
	model: exampleModel,
}) => {
	const onClick = useCallback(() => {
		exampleModel.reduce((state) => {
			return {
				count: state.count + 1,
			}
		})
	}, [])

	return <button onClick={onClick}>click me!</button>
})

export default ExampleWidgetButtonAdd
