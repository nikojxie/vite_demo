import { reactive, toRefs, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
export default function useAsideMenu() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
        collapsed: false,
        selectedKeys: [],
        openKeys: [],
        preOpenKeys: [],
    });
    const menus = [
        {title:'首页', path: '/'},
        {title:'文章归档', path: '/article-file'},
    ]
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
    const handleMenuSelect = ({ key }) => {
        // state.selectedKeys = selectedKeys
        router.push({
            path:key
        })
    }

    onMounted(()=>{
        state.selectedKeys = [route.path]
    })

    return {
        ...toRefs(state),
        toggleCollapsed,
        handleMenuSelect,
        menus
    };
}