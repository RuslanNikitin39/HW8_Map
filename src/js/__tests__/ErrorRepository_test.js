import ErrorRepository from '../ErrorRepository';

const error = new ErrorRepository();

test('400', () => {
  expect(error.translate(400)).toBe('Bad Request');
});

test('404', () => {
  expect(error.translate(404)).toBe('Not Found');
});

test('405', () => {
  expect(error.translate(405)).toBe('Not Allowed');
});

test('Unknown error', () => {
  expect(error.translate(200)).toBe('Unknown error');
});