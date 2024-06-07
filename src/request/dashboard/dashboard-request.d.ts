interface DashboardOwner {
  firstName: string;
  lastName: string;
  picture: string;
  title: string;
  id: string;
}

interface DashboardTaskData {
  owner: DashboardOwner;
  publishDate: string;
  tags: string[];
  image: string;
  likes: number;
  text: string;
  id: string;
}

interface DashboardInboxData {
  owner: DashboardOwner;
  publishDate: string;
  message: string;
  post: string;
  id: string;
}
