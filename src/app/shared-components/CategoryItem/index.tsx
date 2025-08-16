interface CategoryItemProps {
    icon: string;
    label: string;
    active: boolean;
}

const CategoryItem = ({icon, label, active}: CategoryItemProps) => {
    return (
    <div className={`flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer ${active ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:border-red-500'}`}>
        <i className={`fas fa-${icon} text-xl mb-2`}></i>
        <span className="text-xs">{label}</span>
    </div>
    );
};

export default CategoryItem;