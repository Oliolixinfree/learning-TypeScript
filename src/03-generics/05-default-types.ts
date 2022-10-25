// Значения по умолчанию

interface AnyObject {
  [key: string]: unknown;
}

export async function request<T = AnyObject>(url: string): Promise<T> {
  const response = await fetch(url);

  return response.json();
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const data = request<Todo[]>('');
