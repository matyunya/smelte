import test from 'ava';
import smelter from '../src/utils/smelter';

const config = () => ({
  props: {
    error: false,
    primary: false,
    duplicate: false,
  },
  nodes: {
    root: {
      root: 'bg-gray-500',
      duplicate: 'bg-gray-500',
      primary: 'bg-primary-500',
      error: 'bg-error-500'
    },
  }
});

// TODO: rest of conflicting props

test('It builds a default root class string', t => {
	t.is(
    smelter(config()).root.class,
    'bg-gray-500'
  );
});

test('It removes duplicates', t => {
	t.is(
    smelter(config(), { duplicate: true }).root.class,
    'bg-gray-500'
  );
});

test('It removes conflicting bg-color props', t => {
	t.is(
    smelter(config(), { primary: true }).root.class,
    'bg-primary-500'
  );
});

test('It removes conflicting class with modifier', t => {
  const withModifier = () => ({
    props: {
      denser: false,
    },
    nodes: {
      root: {
        root: 'dense:mb-6',
        denser: 'dense:mb-3'
      },
    }
  });
	t.is(
    smelter(withModifier(), { denser: true }).root.class,
    'dense:mb-3'
  );
});

test('It interpolates classes from props', t => {
  const withInterpolation = () => ({
    props: {
      elevation: 3,
    },
    nodes: {
      root: {
        root: 'elevation-$elevation',
      },
    }
  });

	t.is(
    smelter(withInterpolation()).root.class,
    'elevation-3'
  );
	t.is(
    smelter(withInterpolation(), { elevation: 5 }).root.class,
    'elevation-5'
  );
});

test('It accepts function as class argument', t => {
  t.is(
    smelter(config(), { class: i => i }).root.class,
    'bg-gray-500'
  );
});

test('It removes duplicates introduced by function', t => {
  t.is(
    smelter(config(), { class: i => i + ' bg-gray-500' }).root.class,
    'bg-gray-500'
  );
});

test('It removes duplicates introduced by interpolation', t => {
  t.is(
    smelter(config(), { class: i => i + ' bg-$color-500', color: 'gray' }).root.class,
    'bg-gray-500'
  );
});
