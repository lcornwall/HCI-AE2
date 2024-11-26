import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>

      <h1>Landing Page/Dashboard</h1>

      <button>
        <Link href="/studyGroups">
          Go to Study Groups
        </Link>
      </button>


      <button>
        <Link href="/resourceSharing">
          Go to Resource Sharing
        </Link>
      </button>

      <button>
        <Link href="/resourceSharing">
          Go to Courses
        </Link>
      </button>


    </div>
  );
}