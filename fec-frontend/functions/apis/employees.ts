export const getAllEmployees = (request: any, response: any) => {
  const employees = [
    {
      'id': '1',
      'name': 'test',
    },
    {
      'id': '2',
      'name': 'test2',
    }
  ]
  return response.json(employees);
}

