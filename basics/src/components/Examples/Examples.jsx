import { EXAMPLES } from '../../data.js';
import TabButton from '../TabButton/TabButton.jsx';
import { useState } from 'react';

export default function Example() {
    const [selectedTopic, setselectedTopic] = useState();
    function handleSelect(selectedButton) {
        setselectedTopic(selectedButton);
        console.log(selectedButton);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onSelect={() => handleSelect('components')}>
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onSelect={() => handleSelect('jsx')}>
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onSelect={() => handleSelect('props')}>
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onSelect={() => handleSelect('state')}>
                    State
                </TabButton>
            </menu>
            {!selectedTopic ? <p>Please select a topic.</p> :
                (
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>
                )}
        </section>
    );
}
