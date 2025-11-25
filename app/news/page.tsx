import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";

export default async function Page() {
  const { contents: news } = await getNewsList(); //microCMSから取得したcontentsをnewsにリネーム
  return <NewsList news={news} />;
}
