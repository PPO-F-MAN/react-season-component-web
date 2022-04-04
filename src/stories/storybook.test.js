import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  framework: 'react',
  test: ({ story }) => {
    const view = story.render();
    expect(view).toMatchSnapshot();
  },
});
