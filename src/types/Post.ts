export interface Post {
  title: string;
  subtitle: string;
  summary: string;
  featured_image: string;
  created_at: string;
  main_content: string;
  user: {
    profile_pic: string;
    username: string;
    role: string;
  };
}
