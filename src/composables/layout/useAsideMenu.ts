import { reactive, toRefs, watch, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import {
    FolderOpenOutlined,
    HomeOutlined
} from '@ant-design/icons-vue';
export default function useAsideMenu() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
        collapsed: false,
        // selectedKeys: [],
        openKeys: [],
        preOpenKeys: [],
    });
    const menus = [
        {title:'首页', path: '/', icon: HomeOutlined},
        {title:'文章归档', path: '/article-file', icon: FolderOpenOutlined},
    ]
    const selectedKeys = computed(() => {
        return [route.path]
    })
    watch(
        () => state.openKeys,
        (val, oldVal) => {
            state.preOpenKeys = oldVal;
        },
    );
    const toggleCollapsed = () => {
        state.collapsed = !state.collapsed;
        state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };
    const handleMenuSelect = (obj : { key: string }) => {
        router.push({
            path:obj.key
        })
    }

    onMounted(()=>{
        // state.selectedKeys = [route.path]
    })

    return {
        ...toRefs(state),
        selectedKeys,
        toggleCollapsed,
        handleMenuSelect,
        menus
    };
}