import { RequestInvitePayload } from '@/api/request-invite-mutation';
import { API_URL } from '@/lib/constants';
import { http, HttpResponse } from 'msw';
import { ErrorResponse } from '@/api/api';

export const apiMock = [
  http.post<never, RequestInvitePayload>(`${API_URL}/fake-auth`, async ({ request }) => {
    const response = await request.json();

    Object.keys(response).forEach(prop => {
      if (!response[prop as keyof RequestInvitePayload]) {
        return HttpResponse.json<ErrorResponse>(
          { errorMessage: `Bad Request: "${prop}" is required` },
          { status: 400 },
        );
      }
    });

    if (response.email === 'usedemail@airwallex.com') {
      return HttpResponse.json<ErrorResponse>(
        { errorMessage: 'Bad Request: email in use' },
        { status: 400 },
      );
    } else {
      return HttpResponse.text('Registered');
    }
  }),
];
