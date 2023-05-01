import style from "./footer.module.css";

import generatedGitInfo from '../../../git-info.json';

export default function Footer() {
    return (
        <div className={style.container}>
            <div>
                <i className="fa-solid fa-heart" />
                <a href="https://ailakks.com">Made by Ailakks</a>
            </div>
            <div>
                <i className="fa-brands fa-git-alt" />
                <a href="https://github.com/Ailakks/dotme">dotme@{generatedGitInfo.gitBranch} — {generatedGitInfo.gitCommitHash}</a>
            </div>
        </div>
    )
}
