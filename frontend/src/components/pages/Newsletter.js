import NewsletterSign from '../NewsLetterSign';
import PageContent from '../PageContent';

function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSign />
    </PageContent>
  );
}

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Signup successful!' };
}